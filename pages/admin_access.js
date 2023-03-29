import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function admin_access(data) {
  const formatedData = JSON.stringify(data);
  return (
    <p>{formatedData}</p>
  )
}

export async function getServerSideProps() {
  const data = await prisma.user.findMany();
  return {
    props: {
      data : JSON.parse(JSON.stringify(data))
    }
  }
}