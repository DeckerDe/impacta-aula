
locals {
  fonte_lambda = "../build/impacta.zip"
}

data "aws_iam_policy_document" "func_de_exec_doc" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "role_de_exec" {
  name               = "func_de_exec"
  assume_role_policy = data.aws_iam_policy_document.func_de_exec_doc.json
}

resource "aws_s3_object" "objeto_balde_app" {
  key    = "build/impacta.zip"
  bucket = aws_s3_bucket.bucket_impacta.id
  source = local.fonte_lambda
  etag   = filebase64sha256(local.fonte_lambda)
}

###########
# Lambda Function creation
###########
resource "aws_lambda_function" "lambda_app" {
  source_code_hash = filebase64sha256(local.fonte_lambda)
  s3_bucket        = aws_s3_bucket.bucket_impacta.id
  s3_key           = aws_s3_object.objeto_balde_app.key
  function_name    = "impacta-func-app"
  role             = aws_iam_role.role_de_exec.arn
  description      = "App exemplo para a aula de GHA"
  handler          = "index.default"
  timeout          = 30
  memory_size      = 128
  runtime          = "nodejs22.x"
}

resource "aws_cloudwatch_log_group" "lambda_app_log" {
  name = "/aws/lambda/${aws_lambda_function.lambda_app.function_name}"
}

resource "aws_lambda_function_url" "example" {
  function_name      = aws_lambda_function.lambda_app.function_name
  authorization_type = "NONE"
}

output "name" {
  value = aws_lambda_function.lambda_app.function_name
}