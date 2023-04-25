#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack';
import { EcrCdkStack } from '../lib/ecr-cdk-stack';

const app = new cdk.App();

const ecrCdkStack = new EcrCdkStack(app, 'EcrCdkStack', {});

new AppCdkStack(app, 'AppCdkStack', {
  ecrRepository: ecrCdkStack.repository
});

new PipelineCdkStack(app, 'PipelineCdkStack', {
    ecrRepository: ecrCdkStack.repository
})