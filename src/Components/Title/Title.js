import './Title.css'
const Title = (props) => {
	return (
		<>
			<div className='rounded bg-white inline-block px-[15px] font-bold text-[var(--color2)] text-[20px]'>
                <h1>{props.children}</h1>
            </div>
		</>
	)
}

export default Title