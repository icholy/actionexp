import { Stack, StackProps } from 'aws-cdk-lib';
import { User } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class GithubActionsUsersStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new User(this, 'GithubActionsDev', { userName: 'github-actions-dev' });
    new User(this, 'GithubActionsStaging', { userName: 'github-actions-staging' });
    new User(this, 'GithubActionsProd', { userName: 'github-actions-prod' });
  }
}
