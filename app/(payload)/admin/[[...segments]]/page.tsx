import type { Metadata } from "next"
import config from "../../../../payload.config"

export const metadata: Metadata = {
  title: "Mammone Software Admin",
  description: "Admin panel for Mammone Software website",
}

const Admin = ({ params }: { params: { segments: string[] } }) => {
  // return <AdminView config={config} />
  return <div>Admin</div>
}

export default Admin
