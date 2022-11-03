/** @format */

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

const DEFAULT_CIDR: string = '100.64.0.0/16';

export interface WidgetProps {
  readonly name?: string;
  readonly cidr?: string;
}

export class WidgetVpc extends Construct {
  constructor(scope: Construct, id: string, props: WidgetProps) {
    super(scope, id);
    new ec2.Vpc(this, 'Vpc', {
      vpcName: props.name || this.node.path,
      cidr: props.cidr || DEFAULT_CIDR,
    });
  }
}
