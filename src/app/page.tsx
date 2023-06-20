import Image from 'next/image'
import SwitchTheme from './SwitchTheme'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="navbar rounded-box bg-base-100 shadow">
        <div className="navbar-start flex-shrink">
          <div className="placeholder avatar">
            <div className="w-14 rounded-full bg-neutral-focus text-neutral-content">
              <span className="text">VS</span>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn-ghost btn text-xl normal-case">Vedant Sawant</a>
        </div>
        <div className="navbar-end flex-row">
          <div className="tabs justify-items-center px-1 ">
            <a className="tab">About</a>
            <a className="tab">Experience</a>
            <a className="tab">Projects</a>
            <SwitchTheme />
          </div>
        </div>
      </div>
    </main>
  )
}
