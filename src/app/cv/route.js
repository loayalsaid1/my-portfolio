import { redirect } from 'next/navigation';
import { portfolioData } from '../data/portfolioData.jsx';

export async function GET() {
  redirect(portfolioData.contact.cvLink);
}
