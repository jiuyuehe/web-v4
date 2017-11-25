fis.config.set("project.watch.usePolling", true);
fis.set('prefix', '/');
//fis.hook('relative');
//fis.hook('cmd');
fis.hook('module', {
    mode: 'amd' // 模块化支持 amd 规范，适应 require.js
});

/*************************目录规范*****************************/
fis.match('*', {
    relative: false,
    useHash: false,
    useDomain: false,
    domain: false,
    release: false,
    __RESOURCE_MAP: true,
    deploy: fis.plugin('local-deliver', {
        to: 'f:/web4/^'
    })
})
    .match("/app/(**).{js,coffee}", {
        isMod: true,
        isAngular: true,
        useHash: true,
        id: '$1',
        release: '${prefix}/$&',
        postprocessor: fis.plugin('jswrapper', {
            type: 'amd',
            wrapAll: true
        })
    })

    .match("/node_modules/bootstrap/dist/**", {
        release: '${prefix}/$&'
    })

    .match("/node_modules/jquery/dist/*.min.js", {
        release: '${prefix}/$&'
    })

    .match("/assets/**", {
        release: '${prefix}/$&'
    })
    .match("/assets/css/(**).{css,less}", {
        useSprite: false,
        spriteRelease: '${prefix}/assets/img/$1.png',
        release: '${prefix}/$&'
    })
    .match('*.less', {
        rExt: '.css',
        parser: fis.plugin('less')
    })
    .match('/assets/fonts/**', {
        release: '${prefix}/$&'
    })
    .match("/assets/img/**", {
        release: '${prefix}/$&'
    })
    //.match('*.png', {
    //    optimizer: fis.plugin('png-compressor')
    //})
    .match('/assets/js/**', {
        isMod: false,
        release: '${prefix}/$&'
    })

    .match("/pages/(*.{html, htm, php})", {
        useCache: false,
        release: '${prefix}/$1'
    })
    .match('/libs/**/(*).{js,coffee,less,css,json,swf}', {
        isMod: true,
        id: '$1',
        release: '${prefix}/$&',
        postprocessor: fis.plugin('jswrapper', {
            type: 'amd',
            wrapAll: true
        })
    })

    .match("::packager", {
        spriter: fis.plugin('csssprites', {
            htmlUseSprite: true,
            layout: 'matrix',
            margin: '16',
            scale: 0.5,
            styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
        })
    });



fis.media('p')

    // 处理jquery 库
    //.match('/libs/vd/**/**.js', {
    //    optimizer: fis.plugin('uglify-js'),
    //    packTo: '/libs/release/vender/home-require.js'
    //})

    // .match('/libs/vd/*.js', {
    //     optimizer: fis.plugin('uglify-js'),
    //     packTo: '/libs/release/vd/vender.min.js'
    // })

    //.match('/libs/vender/crypto-js/**.js', {
    //    optimizer: fis.plugin('uglify-js'),
    //    packTo: '/libs/release/vender/crypto.min.js'
    //})

    // 处理angular 库

    //.match('/libs/angular/plugins/**.js', {
    //    optimizer: fis.plugin('uglify-js'),
    //    packTo: '/libs/release/angular/angular-pl.min.js',
    //    useHash: true,
    //})

    // .match('/libs/ng/{ui-bootstrap-14-tpls\.min}.js', {
    //     optimizer: fis.plugin('uglify-js'),
    //     packTo: '/libs/release/angular-lib.min.js'
    // })

    //.match('/libs/ng/angular.min.js', {
    //    //optimizer: fis.plugin('uglify-js'),
    //    packTo: '/libs/release/angular/angular.min.js'
    //})

    // .match('/libs/ng/angular.js', {
    //     optimizer: fis.plugin('uglify-js'),
    //     packTo: '/libs/release/angular.js'
    // })
    //
    // .match("/app/(*)/**.js", {
    //     optimizer: [fis.plugin('ng-annotate', 'prepend'), fis.plugin('uglify-js')],
    //     packTo: '/libs/release/app/$1/main.js'
    // })

    .match("/assets/css/**.{css,less}", {
        useSprite: true,
        optimizer: fis.plugin('clean-css')
    })
    // .match("/assets/less/**.{css,less}", {
    //     useSprite: true,
    //     optimizer: fis.plugin('clean-css')
    // })
    .match('/assets/js/**/**.js', {
        optimizer: fis.plugin('uglify-js'),

        isMod: false,
        release: '${prefix}/$&'
    });


