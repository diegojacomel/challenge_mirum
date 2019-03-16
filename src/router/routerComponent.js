// Containers
import Home from '../containers/Home/Home';
import Register from '../containers/Register/Register';
import Result from '../containers/Result/Result';

const routerComponents = [
    {
        route: '/',
        component: Home   
    },
    {
        route: '/register',
        component: Register
    },
    {
        route: '/result',
        component: Result
    }
]

export default routerComponents;