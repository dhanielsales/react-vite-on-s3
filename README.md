## react-vite-on-s3

#### AWS 

- Create a bucket for any environment
  - Allow public access
- Enable static website hosting
  - Properties -> Static website hosting -> Enable -> Host a static website -> Index document: index.html
- Update bucket policy
  - Permissions -> Bucket Policy -> Edit
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::<BUCKET-NAME>/*"
            }
        ]
    }
    ```
- Create a distribution on CloudFront
  - Origin domain: Select the bucket
  - Origin access: Legacy access identities
    - Origin access identity: Select (Recomended) or Create one for the same bucket
    - Bucket policy: Yes, update the bucket policy
  - Web Application Firewall (WAF): Enable security protections
- Configure Error Pages on distribution
  - Error Pages -> Create custom error response
    - 403 and 404
    - Customize error response: Yes
      - Response page path: /index.html
      - HTTP Response code: 200
- Configure Invalidations on distribution
  - Invalidations -> Create invalidation
    - Object paths: /*

- Create IAM user
  - Create a group
    - Permissions: AmazonS3FullAccess
  - Create a user
    - Access type: Programmatic access
    - Add user to group
  - Download credentials

#### Github 

- Add credencials on Github Secrets in accordance with the environment
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - AWS_DEVELOP_BUCKET_NAME
  - AWS_PRODUCTION_BUCKET_NAME