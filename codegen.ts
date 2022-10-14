import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://localhost:1337/graphql',
   documents: ['./**/*.tsx', '!./gql/**/*'],
   ignoreNoDocuments: true, // for better experience with the watcher
   generates: {
      './gql/': { 
         preset: 'client', 
         plugins: [] 
      }
   }
}
export default config