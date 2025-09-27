provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "terraform-state-general-proj"
    key     = "impacta/deploy/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
