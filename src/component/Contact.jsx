import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contactez-moi</h2>
      <p className="text-center mb-5">Je suis disponible pour toute collaboration, projet ou question !</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" placeholder="Votre nom" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="exemple@email.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Votre message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
