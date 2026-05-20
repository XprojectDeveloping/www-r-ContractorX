import { useState } from "react";
import "../../styles/layout/_footer.scss";
function Form({ form }) {
  const [getForm, setGetForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const cleaned = value.replace(/[^A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]/g, "");
      setGetForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "phone") {
      const cleaned = value.replace(/[^\+\d\s\-\(\)]/g, "");
      setGetForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

   if (name === "email") {
     const cleaned = value.replace(/[^A-Za-z0-9@\._\-]/g, "").toLowerCase();
     setGetForm((prev) => ({ ...prev, [name]: cleaned }));
     return;
   }

    setGetForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (getForm.name.trim().length < 2) {
      alert("Name must contain at least 2 characters");
      return;
    }

    if (getForm.phone.trim().length < 9) {
      alert("Please enter a valid phone number.");
      return
    }

    if (!getForm.name || !getForm.phone || !getForm.email) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setGetForm({ name: "", phone: "", email: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <>
      <div className="footer-form">
        <p>{form?.footerTopTitle}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-block">
            <input
              type="text"
              name="name"
              inputMode="text"
              maxLength={50}
              minLength={2}
              pattern="[A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]+"
              placeholder="Name"
              value={getForm.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              inputMode="tel"
              pattern="[\+\d\s\-\(\)]+"
              maxLength={50}
              placeholder="Phone"
              value={getForm.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={getForm.email}
              onChange={handleChange}
            />

            {success &&
              alert(`Your contact information has been successfully sent!`)}
            <div className="button-block">
              <button>{loading ? "Sending..." : form?.footerButton}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;
