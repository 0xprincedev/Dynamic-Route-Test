export default function ProductDetail({
  params: { productId },
}: {
  params: { productId: string };
}) {
  return <div>{productId}</div>;
}
