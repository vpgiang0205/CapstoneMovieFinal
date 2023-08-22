import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/HomeTemplate/HomePage")),
            },
            {
                path: "detail-page/:id",
                element: lazy(() => import("../pages/HomeTemplate/MovieItemDetailPage"))
            },
            {
                path: "about-page",
                element: lazy(() => import("../pages/HomeTemplate/AboutPage"))
            },
            {
                path: "checkout/:id",
                element: lazy(() => import("../pages/HomeTemplate/Checkout"))
            },
        ]
    },
    {
        path: "login-page",
        element: lazy(() => import("../pages/HomeTemplate/LoginPage"))
    },
    {
        path: "register-page",
        element: lazy(() => import("../pages/HomeTemplate/RegisterPage"))
    },
    

]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;