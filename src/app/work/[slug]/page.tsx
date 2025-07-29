export default function About({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161616] text-[#f1f1f1] font-mono text-xl font-bold">
      <p>THIS IS PAGE IS ALL ABOUT THE PROJECT `{params.slug}`</p>
    </div>
  );
}
