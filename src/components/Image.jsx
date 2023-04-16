import qrImage from '../assets/image-qr-code.png';

export default function Image() {
  return (
    <div className="mb-2">
      <img src={qrImage} alt="qr-code-image" />
    </div>
  )
}
