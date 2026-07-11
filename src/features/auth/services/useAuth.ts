import { useState } from "react";

export function useAuth() {

  const [loading, setLoading] = useState(false);

  const login = async () => {

  };

  const signup = async () => {

  };

  return {

    loading,

    login,

    signup,

  };
}