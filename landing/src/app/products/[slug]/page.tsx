export default function Product({ params }: { params: { slug: string } }) {
  return <div>My product: {params.slug}</div>
}