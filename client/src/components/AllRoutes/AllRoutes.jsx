import { useRoutes } from "react-router-dom"
import Home from "../Home";
import AccountOverview from "../Dashboard/AccoutOverview/AccountOverview";
import DomainOverview from "../Dashboard/DomainOverview/DomainOverview";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FraudAnalytics from "../Dashboard/FraudAnalytics/FraudAnalytics";
import FraudAnalyticsFacebook from "../Dashboard/FraudAnalytics/FraudAnalyticsFacebook";
import FraudAnalyticsMicrosoft from "../Dashboard/FraudAnalytics/FraudAnalyticsMicrosoft";
import GoogleServiceConnection from "../Dashboard/ServiceConnections/Google/GoogleServiceConnection";
import GoogleRedirect from "../Dashboard/ServiceConnections/Google/GoogleRedirect";
import Subscription from "../Subscription/Subscription";
import ChoiceOneGoogleAccount from '../Dashboard/ServiceConnections/Google/ChoiceOneGoogleAccount'
import DetectedIps from "../../GoogleAds/DetectedIps";
import BlockIplist from "../../GoogleAds/BlockIplist";
import FraudAnalyticsGoogle from "../Dashboard/FraudAnalytics/FraudAnalyticsGoogle";
import FacebookServiceConnection from "../Dashboard/ServiceConnections/Facebook/FacebookServiceConnection";
import FacebookSelectAccount from "../Dashboard/ServiceConnections/Facebook/FacebookSelectAccount";

const AllRoutes = () => {
    const { user } = useSelector((state) => state.authReducer);

    const ProtectedRoutes = ({ children }) => {

        return user ? children : <Navigate to="/login" />;

    }

    const element = useRoutes([

        { path: '/', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'google-redirect', element: <GoogleRedirect /> },
        { path: 'subscription', element: <Subscription /> },
        { path: 'clientid/:id/:refreshToken', element: <ChoiceOneGoogleAccount /> },

        {
            path: 'dashboard', element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>,
            children: [
                { path: '', element: <AccountOverview /> },
                { path: 'domainoverview', element: <DomainOverview /> },
                { path: 'facebook-account', element: <FacebookSelectAccount /> },
                { path: 'fraudanalytics/:adstype', element: <FraudAnalytics /> },
                {
                    path: 'fraudanalyticsgoogle', element: <FraudAnalyticsGoogle />,
                    children: [
                        { path: 'detectedips', element: <DetectedIps /> },
                        { path: 'blockiplist', element: <BlockIplist /> }
                    ]
                },
                { path: 'connection/google', element: <GoogleServiceConnection /> },
                { path: 'connection/facebook', element: <FacebookServiceConnection /> },
                { path: 'connection/microsoft', element: <FraudAnalyticsMicrosoft /> },

            ]
        }
    ]);

    return element;
}

export default AllRoutes;
