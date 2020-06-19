const base = require('@high-standards-js/base');
const husky = require('@high-standards-js/husky');

(async() => {
    await base.checkAcceptedHighStandards();

    let packageJsonOfConfig = base.getInitiatingProjectPackageJson();
    
    packageJsonOfConfig = await base.addDevDependency(packageJsonOfConfig, 'git-authors-cli');

    packageJsonOfConfig = husky.addHookCommand(
        packageJsonOfConfig, 
        'pre-commit', 
        'git-authors-cli'
    );
    
    base.writeInitiatingProjectPackageJson(packageJsonOfConfig);
})();
