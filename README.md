# hypertension-app

## Set Up:

1. clone repo
2. cd app
3. npm install
4. Create a file `.env` in the root (`/app`) directory that mirrors the following structure:
    ```
    GOOGLE_CLIENT_ID=obtained_from_google
    GOOGLE_CLIENT_SECRET=obtained_from_google
    NEXT_PUBLIC_SECRET=can_be_anything
    ```
    **Note:** Please note the fields with the value `obtained_from_google` can be obtained by creating google oath credentials here: https://console.cloud.google.com/apis/credentials
5. npm run dev

## Deploying to vercal:
1. Navigate to https://vercel.com/ and create an account
2. Create a separate git repo containing all of the files in `/app`
3. Use that repo to deploy your vercel project
4. When setting up the project, add the 3 variables seen above to the vercel environment variables
5. Add your vercel link to both your google credentials redirect uri links. If you do this incorrectly, the google page will error and display the uri you need to add. Don't stress about this.
6. If you wanted to add your own mongodb credentials, simply replace them where you see them present in the files and ensure that you allow mongodb ip access from anywhere in mongodb atlas.