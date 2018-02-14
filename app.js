const Vue = require('nativescript-vue');

new Vue({
    template: `
        <Page class="page">
            <ActionBar class="action-bar" title="NativeScript-Vue"></ActionBar>
            <StackLayout class="p-20">
                <Label textWrap="true" class="h2" :text="headingText"></Label>
                <Image height="200" class="m-y-10" src="~/images/NativeScript-Vue.png"></Image>
                <Label textWrap="true" class="body" :text="bodyText"></Label>
            </StackLayout>
        </Page>
    `,
    data: {
        headingText: 'Welcome to NativeScript-Vue',
        bodyText: 'This template contains a number of app samples that you can use as the starting point of your app. To experiment, try copying and pasting the code from app-with-list-view.js, app-with-router.js, app-with-tab-view.js, or app-with-vmodel.js into your app’s app.js file.'
    }
}).$start();