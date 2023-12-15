import AWS from 'aws-sdk';
import * as CryptoJS from 'crypto-js';
import { CognitoIdentityProviderClient, ConfirmSignUpCommand,InitiateAuthCommand,AuthEventType, AuthFlowType} from '@aws-sdk/client-cognito-identity-provider';


class CognitoSerice {
    private config = {
        region: process.env.AWS_REGION,
    };

    private secretHash = process.env.COGNITO_SECRET_HASH;
    private clientId = process.env.COGNITO_CLIENT_ID;
    congnitoIdentity: any;

    constructor() {
        this.congnitoIdentity = new AWS.CognitoIdentityServiceProvider(this.config);
    }

    async signUp(username: string, password: string, UserAttributes: { [key: string]: string }[]) {
        const params = {
            ClientId: this.clientId,
            Password: password,
            Username: username,
            SecretHash: this.getSecretHash(username),
            UserAttributes
        }
        try {
            const data = this.congnitoIdentity.signUp(params, (err: any, data: any) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(data);
            });
            return data;
        } catch (error) {
            return false;
        }
    }


    private getSecretHash(username: string): string {
        const data = username + this.clientId;
        const hash = CryptoJS.HmacSHA256(data, this.secretHash);
        const secretHash = CryptoJS.enc.Base64.stringify(hash);
        return secretHash;
    }

    public confirmSignUp = async (username: string, code: string) => {
        const client = new CognitoIdentityProviderClient({});

        const command = new ConfirmSignUpCommand({
            ClientId: this.clientId,
            SecretHash: this.getSecretHash(username),
            Username: username,
            ConfirmationCode: code,
        });

        const response = await client.send(command);
        if (response.$metadata.httpStatusCode === 200) {
            return true;
        }
        return false;
    };

    public login = async (username: string, password: string) => {
        const client = new CognitoIdentityProviderClient({});
        const input = {
            AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
            ClientId: this.clientId,
            AuthParameters:{
                'USERNAME': username,
                'PASSWORD': password,
                'SECRET_HASH': this.getSecretHash(username),
            }
        };
        const command = new InitiateAuthCommand(input);
        const response = await client.send(command);
        if (response.$metadata.httpStatusCode === 200) {
            console.log(response);
            return response.$metadata;
        }
        return false;
    };

}

export default CognitoSerice;  