import {IFileGeneratorOptions} from '@urbanshona/common-cli';


export enum GraphQLObjectType {
    argType = 'a',
    inputType = 'i',
    objectType = 'o'
}

export interface IServerApiFileGeneratorOptions extends IFileGeneratorOptions
{
    sourceFilePathGlob: string,
    outputRootPath: string,
}
export interface IGraphqlsifierConfig
{
    globalOptions: IServerApiFileGeneratorOptions;
    outputClasses: IDecoratorOptions[];
}

export interface IDecoratorOptions
{
    className?: string;
    filePath?: string;
    isToAddClassValidatorDecorators: boolean;
    isToAddNestJSGraphQLDecorators: boolean;
    isEverythingOptional: boolean;
    graphqlObjectType: GraphQLObjectType;
    hasNoProperties?: boolean;

}

