export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<h1 className='bg-red-500'>Aqui vem o layout</h1>
			{children}
		</>
	);
}
