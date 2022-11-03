/** @format */

import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { WidgetVpc } from '../src/widgets/myWidget';

describe('Vpc', () => {
  test('Create Default VPC', () => {
    // GIVEN
    const stack = new Stack();
    new WidgetVpc(stack, 'TestVpc', {
      name: 'foo',
      cidr: '10.0.0.0/16',
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 1 VPC created
    template.resourceCountIs('AWS::EC2::VPC', 1);
  });
});
