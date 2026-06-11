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
    true;
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    [];
  };
};
