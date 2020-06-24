export const config = {
  "dev": {
    "username": "udagramdmaninder",
    "password": "ashmeet167",
    "database": "udagramdmaninder",
    "host": "udagramdmaninder.chvxs6j1swtz.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagrammaninderdev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "aws":{
	  "aws_region":"us-east-2",
	  "aws-profile":"default",
	  "aws_media_bucket":"udagrammaninderdev"
  },
  "jwt":{
	  "secret":"helloworld"
  }
}
