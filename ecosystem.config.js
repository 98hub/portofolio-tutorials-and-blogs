module.exports = {
    apps: [
        {
            name: 'docusaurus-prod',
            script: 'npx',
            args: 'docusaurus serve --host 0.0.0.0 --port 3000',
            interpreter: 'none',
            cwd: '/home/jelastic/ROOT',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};