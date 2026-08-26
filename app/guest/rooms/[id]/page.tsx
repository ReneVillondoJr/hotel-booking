interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RoomDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className='p-6'>
      <h1 className='text-2xl font-semibold'>Room Details</h1>

      <p className='mt-2 text-muted-foreground'>Room ID: {id}</p>
    </main>
  );
}
