import config from '../config'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.notFound, component: NotFound }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }