//过滤器
xyapp.filter('typeFilter', function() {
    return function(text) {
        switch (text) {
            case 0: return '首页banner';break;
            case 1: return '找职位banner';break;
            case 2: return '找精英banner';break;
            case 3: return '行业大图';break;
        }
    }
}).filter('statusFilter', function() {
    return function(text) {
        switch (text) {
            case 1: return '草稿';break;
            case 2: return '上线';break;
        }
    }
})