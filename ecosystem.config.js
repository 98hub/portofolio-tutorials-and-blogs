module.exports = {
    apps: [
        {
            name: 'docusaurus-prod',
            script: 'npx',
            args: 'docusaurus serve --host portfolio.user.cloudjkt02.com --port 3000',
            interpreter: 'none',
            cwd: '/home/jelastic/ROOT',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};