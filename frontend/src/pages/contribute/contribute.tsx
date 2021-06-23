import { useHistory } from "react-router-dom"
import { PaymentDetails } from "../../components/payment-details/payment-details"
import { UserAddress } from "../../components/user-address/user-address"
import "./contribute.css"
import "./circle.css"

export const Contribute: React.FC = () => {
  const history = useHistory()
  const user = localStorage.getItem("account") as string
  if (user == null) history.push("/")

  const pledge = () => {
    console.log("hello")
  }

  return <div className="contributeLayout">
    <UserAddress user={user} />
    <h1>$0.00</h1>
    <button onClick={pledge}>Make Pledge</button>
    <PaymentDetails />
  </div >
}