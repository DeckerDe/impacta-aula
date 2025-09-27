provider "aws" {
  region = "us-east-1"
}


###########
# Backend configuration
###########
terraform {
  backend "s3" {
    bucket = "terraform-state-general-proj"
    key     = "impacta/deploy/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

data "aws_region" "current" {}

data "aws_caller_identity" "current" {}