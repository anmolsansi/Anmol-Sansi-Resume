import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-yellow-400 inline-block pb-1">Contact</h2>
        <br></br>
        <br></br>
        <form
          action="https://formspree.io/f/xblygpjg"  // 🔁 Replace this with your actual Formspree endpoint
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium" htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium" htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Optional: Redirect after submit */}
          {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> */}

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
