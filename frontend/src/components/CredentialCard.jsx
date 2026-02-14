import { formatDate, ipfsToHttp } from '../utils/helpers';

const CredentialCard = ({ credential, metadata, onRevoke, showActions = false }) => {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Credential Badge */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            {metadata?.image ? (
              <img
                src={ipfsToHttp(metadata.image)}
                alt="Credential"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-white text-5xl">🎓</span>
            )}
          </div>
        </div>

        {/* Credential Details */}
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {metadata?.degree || metadata?.name || 'Academic Credential'}
              </h3>
              <p className="text-gray-600">{metadata?.institution || 'Institution Not Specified'}</p>
            </div>
            {credential.revoked ? (
              <span className="badge badge-danger">Revoked</span>
            ) : (
              <span className="badge badge-success">Valid</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">Student</p>
              <p className="font-medium text-gray-800">{metadata?.studentName || 'Not Specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Grade</p>
              <p className="font-medium text-gray-800">{metadata?.grade || 'Not Specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Issue Date</p>
              <p className="font-medium text-gray-800">
                {metadata?.issueDate || formatDate(credential.issueTimestamp)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Token ID</p>
              <p className="font-medium text-gray-800">#{credential.tokenId.toString()}</p>
            </div>
          </div>

          {metadata?.description && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">{metadata.description}</p>
            </div>
          )}

          {/* Actions */}
          {showActions && !credential.revoked && (
            <div className="mt-4 flex space-x-3">
              <a
                href={ipfsToHttp(credential.metadataURI)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                View Metadata
              </a>
              {onRevoke && (
                <button
                  onClick={() => onRevoke(credential.tokenId)}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Revoke
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CredentialCard;
