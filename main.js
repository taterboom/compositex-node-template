// !!! notice the "export default" below
export default (function () {
  /** @type {CompositeX.MetaNodeConfig} */
  const nodeConfig = {
    config: {
      name: "S3",
      desc: "S3 Upload via @aws-sdk/client-s3",
      input: { type: "file" },
      output: { type: "any" },
      options: [
        { name: "region", type: "string" },
        { name: "accessKeyId", type: "string" },
        { name: "secretAccessKey", type: "string" },
        { name: "bucket", type: "string" },
      ],
    },
    async run(input, options, context) {
      const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")
      const s3client = new S3Client({
        region: options.region,
        credentials: {
          accessKeyId: options.accessKeyId,
          secretAccessKey: options.secretAccessKey,
        },
      })

      const filename = `${Date.now()}-${input.name}`
      const result = await s3client.send(
        new PutObjectCommand({
          Bucket: options.bucket,
          Key: filename,
          Body: input,
          ContentType: input.type,
        })
      )
      return {
        ...result,
        url: `https://${options.bucket}.s3.${options.region}.amazonaws.com/${filename}`,
      }
    },
  }
  return nodeConfig
})()
