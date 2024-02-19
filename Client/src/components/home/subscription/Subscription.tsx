const Subscription = () => {
  return (
    <section className="subscription ">
      <div className="container">
        <div className="subscription-content gap-6 flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 max-w-md">
            <h1 className="text-2xl md:text-3xl mb-2">
              Sign up and get up to
              <span className="text-red-500 font-JostSemiBold">20%</span> off
              your first purchase
            </h1>
            <p>
              Receive offers, product alerts, styling inspiration and more. By
              signing up, you agree to our Privacy Policy.
            </p>
          </div>
          <div className="border-b-black border-b flex flex-nowrap w-full md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full"
            />
            <button className="btn-outline text-lg capitalize">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
