interface IconProps {
  name:
    | 'plus'
    | 'x'
    | 'pencil'
    | 'eraser'
    | 'fill'
    | 'eyedropper'
    | 'shade'
    | 'lighten'
    | 'download'
    | 'upload'
    | 'trash'
    | 'eye'
    | 'eye-off'
    | 'lock'
    | 'unlock'
    | 'mirror'
    | 'grid'
    | 'mask'
    | 'undo'
    | 'redo'
    | 'home'
    | 'save'
    | 'folder'
    | 'folder-big'
    | 'merge'
    | 'duplicate'
    | 'up'
    | 'down'
    | 'check'
    | 'face'
    | 'hair'
    | 'shirt'
    | 'pants'
    | 'shoes'
    | 'star'
  size?: number
  color?: string
  className?: string
}

const path = (d: string, fill: string) => <path d={d} fill={fill} />

// Tiny inline pixel-art icons - all in a 16x16 viewbox.
export const Icon = ({ name, size = 14, color = '#2A2138', className }: IconProps) => {
  const c = color
  const w = (svg: React.ReactNode) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {svg}
    </svg>
  )

  switch (name) {
    case 'plus':
      return w(
        <>
          <rect x="7" y="3" width="2" height="10" fill={c} />
          <rect x="3" y="7" width="10" height="2" fill={c} />
        </>,
      )
    case 'x':
      return w(
        <>
          <rect x="3" y="3" width="2" height="2" fill={c} />
          <rect x="5" y="5" width="2" height="2" fill={c} />
          <rect x="7" y="7" width="2" height="2" fill={c} />
          <rect x="9" y="9" width="2" height="2" fill={c} />
          <rect x="11" y="11" width="2" height="2" fill={c} />
          <rect x="11" y="3" width="2" height="2" fill={c} />
          <rect x="9" y="5" width="2" height="2" fill={c} />
          <rect x="5" y="9" width="2" height="2" fill={c} />
          <rect x="3" y="11" width="2" height="2" fill={c} />
        </>,
      )
    case 'pencil':
      return w(
        <>
          <rect x="10" y="2" width="3" height="3" fill={c} />
          <rect x="8" y="4" width="3" height="3" fill={c} />
          <rect x="6" y="6" width="3" height="3" fill={c} />
          <rect x="4" y="8" width="3" height="3" fill={c} />
          <rect x="3" y="11" width="2" height="2" fill={c} />
          <rect x="2" y="13" width="3" height="1" fill="#5B3A1F" />
        </>,
      )
    case 'eraser':
      return w(
        <>
          <rect x="3" y="9" width="10" height="4" fill="#FF9FB1" />
          <rect x="3" y="9" width="10" height="1" fill={c} />
          <rect x="3" y="13" width="10" height="1" fill={c} />
          <rect x="3" y="9" width="1" height="4" fill={c} />
          <rect x="12" y="9" width="1" height="4" fill={c} />
          <rect x="4" y="11" width="8" height="1" fill="#FFFBEA" />
        </>,
      )
    case 'fill':
      return w(
        <>
          <rect x="3" y="3" width="2" height="2" fill={c} />
          <rect x="5" y="5" width="2" height="2" fill={c} />
          <rect x="7" y="7" width="2" height="2" fill={c} />
          <rect x="4" y="9" width="6" height="2" fill="#F5C04A" />
          <rect x="5" y="11" width="4" height="1" fill={c} />
          <rect x="11" y="9" width="2" height="3" fill="#3FB6A8" />
        </>,
      )
    case 'eyedropper':
      return w(
        <>
          <rect x="10" y="2" width="3" height="2" fill="#7B7F87" />
          <rect x="9" y="4" width="3" height="2" fill="#C8CCD2" />
          <rect x="7" y="6" width="3" height="2" fill={c} />
          <rect x="5" y="8" width="3" height="2" fill={c} />
          <rect x="3" y="10" width="3" height="2" fill={c} />
          <rect x="2" y="12" width="2" height="2" fill={c} />
        </>,
      )
    case 'shade':
      return w(
        <>
          <circle cx="8" cy="8" r="5" fill={c} />
          <rect x="3" y="7" width="5" height="3" fill="#1B1424" />
        </>,
      )
    case 'lighten':
      return w(
        <>
          <circle cx="8" cy="8" r="5" fill="#F5C04A" />
          <rect x="3" y="7" width="13" height="3" fill="#FFFBEA" />
        </>,
      )
    case 'download':
      return w(
        <>
          <rect x="7" y="2" width="2" height="7" fill={c} />
          <rect x="5" y="7" width="6" height="2" fill={c} />
          <rect x="4" y="9" width="8" height="1" fill={c} />
          <rect x="3" y="12" width="10" height="2" fill={c} />
        </>,
      )
    case 'upload':
      return w(
        <>
          <rect x="7" y="6" width="2" height="7" fill={c} />
          <rect x="5" y="6" width="6" height="2" fill={c} />
          <rect x="4" y="6" width="8" height="1" fill={c} />
          <rect x="3" y="2" width="10" height="2" fill={c} />
        </>,
      )
    case 'trash':
      return w(
        <>
          <rect x="3" y="3" width="10" height="2" fill={c} />
          <rect x="6" y="2" width="4" height="1" fill={c} />
          <rect x="3" y="5" width="10" height="9" fill={c} />
          <rect x="5" y="7" width="1" height="5" fill="#F5C04A" />
          <rect x="7" y="7" width="2" height="5" fill="#F5C04A" />
          <rect x="10" y="7" width="1" height="5" fill="#F5C04A" />
        </>,
      )
    case 'eye':
      return w(
        <>
          <rect x="3" y="7" width="10" height="3" fill={c} />
          <rect x="4" y="6" width="8" height="1" fill={c} />
          <rect x="4" y="10" width="8" height="1" fill={c} />
          <rect x="5" y="7" width="6" height="3" fill="#FFFBEA" />
          <rect x="7" y="7" width="3" height="3" fill="#3FB6A8" />
          <rect x="8" y="8" width="1" height="1" fill={c} />
        </>,
      )
    case 'eye-off':
      return w(
        <>
          <rect x="3" y="7" width="10" height="3" fill={c} />
          <rect x="5" y="7" width="6" height="3" fill="#7B7F87" />
          <rect x="3" y="3" width="2" height="2" fill={c} />
          <rect x="5" y="5" width="2" height="2" fill={c} />
          <rect x="7" y="7" width="2" height="2" fill={c} />
          <rect x="9" y="9" width="2" height="2" fill={c} />
          <rect x="11" y="11" width="2" height="2" fill={c} />
        </>,
      )
    case 'lock':
      return w(
        <>
          <rect x="4" y="3" width="8" height="2" fill={c} />
          <rect x="3" y="5" width="2" height="3" fill={c} />
          <rect x="11" y="5" width="2" height="3" fill={c} />
          <rect x="3" y="7" width="10" height="7" fill={c} />
          <rect x="7" y="9" width="2" height="3" fill="#F5C04A" />
        </>,
      )
    case 'unlock':
      return w(
        <>
          <rect x="4" y="3" width="8" height="2" fill={c} />
          <rect x="11" y="5" width="2" height="3" fill={c} />
          <rect x="3" y="7" width="10" height="7" fill={c} />
          <rect x="7" y="9" width="2" height="3" fill="#F5C04A" />
        </>,
      )
    case 'mirror':
      return w(
        <>
          <rect x="7" y="2" width="2" height="12" fill={c} />
          <rect x="2" y="4" width="4" height="8" fill="#F5C04A" />
          <rect x="2" y="4" width="4" height="8" stroke={c} strokeWidth="1" fill="none" />
          <rect x="10" y="4" width="4" height="8" fill="#3FB6A8" />
          <rect x="10" y="4" width="4" height="8" stroke={c} strokeWidth="1" fill="none" />
        </>,
      )
    case 'grid':
      return w(
        <>
          <rect x="3" y="3" width="10" height="10" fill="none" stroke={c} />
          <rect x="3" y="6" width="10" height="1" fill={c} />
          <rect x="3" y="9" width="10" height="1" fill={c} />
          <rect x="6" y="3" width="1" height="10" fill={c} />
          <rect x="9" y="3" width="1" height="10" fill={c} />
        </>,
      )
    case 'mask':
      return w(
        <>
          <rect x="3" y="3" width="10" height="10" fill="#F5C04A" />
          <rect x="3" y="3" width="10" height="10" fill="none" stroke={c} />
          <rect x="5" y="5" width="6" height="6" fill={c} />
          <rect x="6" y="6" width="4" height="4" fill="#F7E6CF" />
        </>,
      )
    case 'undo':
      return w(
        <>
          <rect x="3" y="6" width="6" height="2" fill={c} />
          <rect x="2" y="7" width="2" height="2" fill={c} />
          <rect x="3" y="8" width="2" height="2" fill={c} />
          <rect x="5" y="6" width="2" height="2" fill={c} />
          <rect x="9" y="6" width="4" height="2" fill={c} />
          <rect x="11" y="8" width="2" height="2" fill={c} />
          <rect x="11" y="10" width="2" height="2" fill={c} />
        </>,
      )
    case 'redo':
      return w(
        <>
          <rect x="7" y="6" width="6" height="2" fill={c} />
          <rect x="12" y="7" width="2" height="2" fill={c} />
          <rect x="11" y="8" width="2" height="2" fill={c} />
          <rect x="9" y="6" width="2" height="2" fill={c} />
          <rect x="3" y="6" width="4" height="2" fill={c} />
          <rect x="3" y="8" width="2" height="2" fill={c} />
          <rect x="3" y="10" width="2" height="2" fill={c} />
        </>,
      )
    case 'home':
      return w(
        <>
          <rect x="7" y="2" width="2" height="2" fill={c} />
          <rect x="5" y="3" width="6" height="2" fill={c} />
          <rect x="3" y="5" width="10" height="2" fill={c} />
          <rect x="3" y="7" width="10" height="7" fill={c} />
          <rect x="6" y="9" width="4" height="5" fill="#F5C04A" />
        </>,
      )
    case 'save':
      return w(
        <>
          <rect x="2" y="2" width="12" height="12" fill={c} />
          <rect x="4" y="3" width="8" height="4" fill="#F7E6CF" />
          <rect x="5" y="4" width="2" height="2" fill={c} />
          <rect x="4" y="9" width="8" height="4" fill="#F7E6CF" />
        </>,
      )
    case 'folder':
      return w(
        <>
          <rect x="2" y="5" width="5" height="2" fill={c} />
          <rect x="2" y="6" width="12" height="8" fill={c} />
          <rect x="3" y="7" width="10" height="6" fill="#F5C04A" />
        </>,
      )
    case 'folder-big':
      return w(
        <>
          <rect x="1" y="4" width="7" height="2" fill={c} />
          <rect x="1" y="5" width="14" height="10" fill={c} />
          <rect x="2" y="7" width="12" height="7" fill="#F5C04A" />
        </>,
      )
    case 'merge':
      return w(
        <>
          <rect x="3" y="3" width="10" height="2" fill={c} />
          <rect x="3" y="6" width="10" height="2" fill="#F5C04A" />
          <rect x="3" y="6" width="10" height="2" stroke={c} fill="#F5C04A" />
          <rect x="3" y="11" width="10" height="2" fill={c} />
          <rect x="7" y="8" width="2" height="3" fill={c} />
          <rect x="5" y="9" width="6" height="1" fill={c} />
        </>,
      )
    case 'duplicate':
      return w(
        <>
          <rect x="2" y="2" width="9" height="9" fill={c} />
          <rect x="3" y="3" width="7" height="7" fill="#F5C04A" />
          <rect x="5" y="5" width="9" height="9" fill={c} />
          <rect x="6" y="6" width="7" height="7" fill="#F7E6CF" />
        </>,
      )
    case 'up':
      return w(
        <>
          <rect x="7" y="3" width="2" height="10" fill={c} />
          <rect x="5" y="5" width="6" height="2" fill={c} />
          <rect x="3" y="7" width="10" height="2" fill={c} />
        </>,
      )
    case 'down':
      return w(
        <>
          <rect x="7" y="3" width="2" height="10" fill={c} />
          <rect x="5" y="9" width="6" height="2" fill={c} />
          <rect x="3" y="7" width="10" height="2" fill={c} />
        </>,
      )
    case 'check':
      return w(
        <>
          <rect x="2" y="8" width="2" height="2" fill={c} />
          <rect x="4" y="10" width="2" height="2" fill={c} />
          <rect x="6" y="8" width="2" height="2" fill={c} />
          <rect x="8" y="6" width="2" height="2" fill={c} />
          <rect x="10" y="4" width="2" height="2" fill={c} />
          <rect x="12" y="2" width="2" height="2" fill={c} />
        </>,
      )
    case 'face':
      return w(
        <>
          <rect x="3" y="3" width="10" height="10" fill="#C39979" />
          <rect x="5" y="6" width="1" height="1" fill={c} />
          <rect x="10" y="6" width="1" height="1" fill={c} />
          <rect x="6" y="9" width="4" height="1" fill={c} />
        </>,
      )
    case 'hair':
      return w(
        <>
          <rect x="3" y="3" width="10" height="3" fill="#3D2614" />
          <rect x="3" y="6" width="2" height="6" fill="#3D2614" />
          <rect x="11" y="6" width="2" height="6" fill="#3D2614" />
        </>,
      )
    case 'shirt':
      return w(
        <>
          <rect x="3" y="4" width="10" height="2" fill="#2F8FCF" />
          <rect x="2" y="5" width="2" height="4" fill="#2F8FCF" />
          <rect x="12" y="5" width="2" height="4" fill="#2F8FCF" />
          <rect x="3" y="6" width="10" height="7" fill="#2F8FCF" />
          <rect x="6" y="4" width="4" height="1" fill="#F7E6CF" />
        </>,
      )
    case 'pants':
      return w(
        <>
          <rect x="3" y="3" width="10" height="3" fill="#3B5BA3" />
          <rect x="3" y="6" width="4" height="8" fill="#3B5BA3" />
          <rect x="9" y="6" width="4" height="8" fill="#3B5BA3" />
        </>,
      )
    case 'shoes':
      return w(
        <>
          <rect x="2" y="10" width="5" height="3" fill="#5B3A1F" />
          <rect x="9" y="10" width="5" height="3" fill="#5B3A1F" />
          <rect x="2" y="12" width="12" height="2" fill="#2A2138" />
        </>,
      )
    case 'star':
      return w(
        <>
          <rect x="7" y="2" width="2" height="2" fill={c} />
          <rect x="5" y="5" width="6" height="2" fill={c} />
          <rect x="3" y="7" width="10" height="2" fill={c} />
          <rect x="5" y="9" width="6" height="2" fill={c} />
          <rect x="3" y="11" width="2" height="3" fill={c} />
          <rect x="11" y="11" width="2" height="3" fill={c} />
        </>,
      )
  }
}
