import Text "mo:core/Text";
import List "mo:core/List";
import Principal "mo:core/Principal";

actor {
  type Contact = {
    name : Text;
    email : Text;
    company : Text;
    projectType : Text;
    message : Text;
    submittedBy : Principal;
  };

  public shared ({ caller }) func addContact(name : Text, email : Text, company : Text, projectType : Text, message : Text) : async Bool {
    // Note: In a real implementation, you would store this in a stable variable or a Buffer.
    // This serves as the functional interface for the contact form.
    true;
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    []; // Placeholder for contact retrieval
  };
};
