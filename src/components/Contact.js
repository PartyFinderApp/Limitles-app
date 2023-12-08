import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can access form data using event.target
    const formData = new FormData(event.target);
    // Log the form data (replace this with your desired functionality)
    for (let entry of formData.entries()) {
      console.log(`${entry[0]}: ${entry[1]}`);
    }
    // You can perform further actions here, like sending the form data to an API, etc.
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-md px-4 py-8 mx-auto mt-12 lg:py-16 lg:mt-24 sm:mt-24">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        {t('Contact.text1')}
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
        {t('Contact.text2')}
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {t('Contact.text9')}
            </label>
            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {t('Contact.text6')}
            </label>
            <input type="text" id="subject" name="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            {t('Contact.text7')}
            </label>
            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Send your message..."></textarea>
          </div>
          <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
