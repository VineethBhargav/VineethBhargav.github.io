import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? (
    <header>
      <a href="/" class="site-logo-link" aria-label="Go to homepage">
        <img src="/logo.svg" alt="RVBC REALM logo" class="site-logo" />
      </a>
      {children}
    </header>
  ) : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
}

.site-logo-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.site-logo {
  height: 42px;
  width: auto;
  display: block;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
