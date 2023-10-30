import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/customers/table';
import { fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?:string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
        <Table query={query} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}