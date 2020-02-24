import React from 'react';
import { useToasts } from 'react-toast-notifications'

const Toastr = () => {
    const { addToast } = useToasts()

    return addToast('Saved Successfully', { appearance: 'success' })

  }

  export default Toastr;