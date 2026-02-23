import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ashleyLogo from '@/assets/ashley-logo.png';
import southLogo from '@/assets/1915-south-logo.jpg';

const clients = [
  {
    name: 'Ashley Furniture',
    logo: ashleyLogo,
    invertLogo: true,
    href: '/industries/retail#testimonials',
  },
  {
    name: '1915 South',
    logo: southLogo,
    invertLogo: false,
    href: '/industries/retail#testimonials',
  },
];

const ClientLogosSection = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <p className="text-center text-sm font-medium text-[hsl(220,10%,50%)] uppercase tracking-wider mb-8">
          Trusted By Industry Leaders
        </p>

        <div className="flex items-center justify-center gap-8 lg:gap-14">
          {clients.map((client) => (
            <Link key={client.name} to={client.href}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="group w-40 h-24 lg:w-48 lg:h-28 rounded-xl bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] hover:border-primary/25 flex items-center justify-center p-5 transition-colors duration-300 cursor-pointer"
                style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.02)' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-h-full max-w-full object-contain transition-opacity duration-300 opacity-60 group-hover:opacity-100 ${client.invertLogo ? 'brightness-0 invert' : 'rounded-md'}`}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
