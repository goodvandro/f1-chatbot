import "./global.css"

export const metadata = {
  title: 'F1GPT Chatbot',
  description: 'The place to go for all your Formula One questions!',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout