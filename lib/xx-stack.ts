import { BundlingFileAccess, Stack, StackProps } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, OutputFormat, SourceMapMode } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';


export class XxStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nodeF = new NodejsFunction(this, 'xx', {
      handler: 'handler',
      entry: join(__dirname, 'lambda/xx.ts'),
      architecture: Architecture.ARM_64,
      bundling: {
        format: OutputFormat.ESM,
        preCompilation: true,
        forceDockerBundling: true,
        // target: 'es2020',
        sourceMap: true,
        sourceMapMode: SourceMapMode.INLINE,
        tsconfig: join(__dirname, 'lambda/tsconfig.lambda.json'),
      }

    })
  }
}
