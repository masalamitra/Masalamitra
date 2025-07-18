import { useState } from 'react';
import { db } from '../utils/firebase';
import { doc, updateDoc } from 'firebase/firestore';

function DeliveryProofUpload({ orderId }) {
  const [file, setFile] = useState(null);

  const uploadProof = async () => {
    const imageUrl = await uploadToFirebase(file); // You’ll define this in utils
    await updateDoc(doc(db, 'orders', orderId), {
      status: 'delivered',
      proofImage: imageUrl,
    });
    alert("Proof Uploaded!");
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button disabled={!file} onClick={uploadProof}>Submit Proof</button>
    </div>
  );
}

export default DeliveryProofUpload;
