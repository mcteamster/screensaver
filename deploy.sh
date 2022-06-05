#!/bin/bash
serverless deploy
aws s3 sync "./public" "s3://screensaver.tonz.io"
