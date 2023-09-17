// src/components/ProtectedPage.js

import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

function ProtectedPage() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to the login page if the user is not logged in
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  // Render your protected page content here
  return (
    <div>
      <h2>Protected Page</h2>
      {/* Your protected page content */}
    </div>
  );
}

export default ProtectedPage;
